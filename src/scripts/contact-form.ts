import { showToast } from "../lib/toast";

export function initContactForm(): void {
  const form = document.querySelector("[data-contact-form]");
  if (!(form instanceof HTMLFormElement)) return;
  if (form.dataset.initialized === "true") return;
  form.dataset.initialized = "true";

  const fields = form.querySelectorAll("[data-contact-input][required]");
  const submitButton = form.querySelector('button[type="submit"]');
  const submitLabel = submitButton?.querySelector(".button__label");
  let hasSubmittedSuccessfully = false;

  const endpoint = form.dataset.contactEndpoint || "";

  const waitForNextFrame = () =>
    new Promise<void>((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    });

  const resetFormState = () => {
    form.querySelectorAll("[data-contact-field]").forEach((group) => {
      group.classList.remove("field-error");
    });

    form.querySelectorAll("[data-contact-input]").forEach((field) => {
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        field.dataset.touched = "false";
        field.setAttribute("aria-invalid", "false");
      }
    });

    const messageField = form.querySelector("#message");
    if (messageField instanceof HTMLTextAreaElement) {
      messageField.style.height = "auto";
    }
  };

  const setSubmitLoading = (isLoading: boolean) => {
    if (!(submitButton instanceof HTMLButtonElement)) return;

    submitButton.disabled = isLoading;
    submitButton.classList.toggle("is-loading", isLoading);
    submitButton.setAttribute("aria-busy", isLoading ? "true" : "false");
  };

  const setSubmitSuccess = () => {
    if (!(submitButton instanceof HTMLButtonElement)) return;

    submitButton.disabled = true;
    submitButton.classList.remove("is-loading");
    submitButton.setAttribute("aria-busy", "false");

    if (submitLabel instanceof HTMLElement) {
      submitLabel.textContent = "Consulta enviada";
    }

    form.classList.remove("is-submitting");
    form.classList.add("is-submitted");
    form.dataset.submitting = "true";
  };

  const setFormSubmitting = (isSubmitting: boolean) => {
    form.dataset.submitting = isSubmitting ? "true" : "false";
    form.classList.toggle("is-submitting", isSubmitting);
  };

  const getFieldValue = (name: string) => {
    const field = form.elements.namedItem(name);
    if (field instanceof RadioNodeList) {
      return field.value;
    }
    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement ||
      field instanceof HTMLSelectElement
    ) {
      return field.value;
    }
    return "";
  };

  const resizeTextarea = (field: Element) => {
    if (!(field instanceof HTMLTextAreaElement)) return;

    field.style.height = "auto";
    field.style.height = `${field.scrollHeight}px`;
  };

  const validateField = (field: Element, showAll = false) => {
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) {
      return false;
    }

    const group = field.closest("[data-contact-field]");
    if (!(group instanceof HTMLElement)) return false;

    const hasValue = field.value.trim() !== "";
    const isTouched = field.dataset.touched === "true";
    const isInvalid = !field.checkValidity();
    const showError =
      showAll ? isInvalid : isInvalid && (hasValue || (isTouched && field.required));

    group.classList.toggle("field-error", showError);
    field.setAttribute("aria-invalid", showError ? "true" : "false");

    return showError;
  };

  fields.forEach((field) => {
    resizeTextarea(field);

    field.addEventListener("input", () => {
      if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLTextAreaElement
      ) {
        if (field.value.trim() !== "") {
          field.dataset.touched = "true";
        }
      }
      resizeTextarea(field);
      validateField(field);
    });

    field.addEventListener("blur", () => {
      if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLTextAreaElement
      ) {
        field.dataset.touched = "true";
      }
      validateField(field);
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (hasSubmittedSuccessfully || form.dataset.submitting === "true") {
      return;
    }

    let hasError = false;

    fields.forEach((field) => {
      if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLTextAreaElement
      ) {
        field.dataset.touched = "true";
      }
      if (validateField(field, true)) {
        hasError = true;
      }
    });

    if (hasError) {
      const firstInvalid = form.querySelector(
        "[data-contact-field].field-error [data-contact-input]"
      );
      if (firstInvalid instanceof HTMLElement) {
        firstInvalid.focus();
      }
      return;
    }

    if (!endpoint) {
      showToast({
        variant: "error",
        text: "El formulario no está configurado. Escríbanos directamente a abogados@goniabogados.cl.",
      });
      return;
    }

    const payload = {
      name: getFieldValue("name").trim(),
      company: getFieldValue("company").trim(),
      email: getFieldValue("email").trim(),
      phone: getFieldValue("phone").trim(),
      area: getFieldValue("area").trim(),
      message: getFieldValue("message").trim(),
      website: getFieldValue("website").trim(),
    };

    setFormSubmitting(true);
    setSubmitLoading(true);
    await waitForNextFrame();

    try {
      await Promise.all([
        fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
        new Promise((resolve) => window.setTimeout(resolve, 700)),
      ]);

      form.reset();
      resetFormState();
      hasSubmittedSuccessfully = true;
      setSubmitSuccess();
      showToast({
        variant: "success",
        text: "Gracias. Recibimos su consulta y le responderemos a la brevedad.",
      });
    } catch {
      setFormSubmitting(false);
      setSubmitLoading(false);
      showToast({
        variant: "error",
        text: "No pudimos enviar su consulta. Inténtelo nuevamente o escríbanos directamente.",
      });
    }
  });
}
