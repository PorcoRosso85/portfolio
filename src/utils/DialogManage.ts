export const dialog = document.querySelector("dialog");

export function closeDialog() {
  if (dialog) {
    dialog.close();
  }
}
