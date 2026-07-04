export type ToastVariant = "success" | "error" | "message";

interface ToastOptions {
  text: string;
  variant?: ToastVariant;
  /** Auto-dismiss in ms. Pass 0 to keep until closed. */
  duration?: number;
}

const DEFAULT_DURATION: Record<ToastVariant, number> = {
  success: 6000,
  error: 0,
  message: 5000,
};

const ICONS: Record<ToastVariant, string> = {
  success: "check_circle",
  error: "error",
  message: "info",
};

function getRegion(): HTMLElement | null {
  return document.querySelector("[data-toast-region]");
}

function dismissToast(toast: HTMLElement) {
  toast.dataset.state = "leaving";
  const remove = () => toast.remove();
  toast.addEventListener("transitionend", remove, { once: true });
  window.setTimeout(remove, 320);
}

export function showToast({
  text,
  variant = "message",
  duration = DEFAULT_DURATION[variant],
}: ToastOptions) {
  const region = getRegion();
  if (!region) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.dataset.variant = variant;
  toast.dataset.state = "entering";
  toast.setAttribute("role", "status");

  const icon = document.createElement("span");
  icon.className = "toast__icon material-symbols-sharp";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = ICONS[variant];

  const message = document.createElement("p");
  message.className = "toast__message";
  message.textContent = text;

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "toast__close";
  closeButton.setAttribute("aria-label", "Cerrar notificación");
  closeButton.innerHTML =
    '<span class="material-symbols-sharp" aria-hidden="true">close</span>';

  closeButton.addEventListener("click", () => dismissToast(toast));

  toast.append(icon, message, closeButton);
  region.append(toast);

  requestAnimationFrame(() => {
    toast.dataset.state = "visible";
  });

  if (duration > 0) {
    window.setTimeout(() => {
      if (toast.isConnected) dismissToast(toast);
    }, duration);
  }
}
