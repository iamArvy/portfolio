import type { Flash } from "~/types";

// This composable is used to manage flash messages in the application.
// Flash messages are temporary messages that are displayed to the user
// to provide feedback about an action they have taken, such as submitting a form.
// The useFlash function creates a reactive state for the flash message
// and provides a method to show the message for a specified duration.
// The flash message is automatically cleared after the duration has passed.
// This is useful for providing feedback to the user without requiring them
// to manually dismiss the message.
// The flash message can be of different types, such as success, error, or info.
// The useFlash function returns the current flash message and a method to show the message.
// The showFlash method takes a message as an argument and sets the flash message state.
// The flash message is displayed for 3 seconds before being cleared.
// This is useful for providing feedback to the user without requiring them
// to manually dismiss the message.
// The useFlash function is a simple and effective way to manage flash messages
// in a Vue.js application. It provides a clean and reusable way to handle flash messages
function useFlash() {
  const flash = useState<Flash | null>("flash", () => null);

  function setFlash(value: Flash) {
    flash.value = value;
  }

  function setSuccess(message: string) {
    setFlash({ type: "success", message });
  }

  function setError(message: string) {
    setFlash({ type: "error", message });
  }
  function setInfo(message: string) {
    setFlash({ type: "info", message });
  }

  function clearFlash() {
    flash.value = null;
  }
  return {
    flashMessage: flash,
    setFlash,
    setSuccess,
    setError,
    setInfo,
    clearFlash,
  };
}

export default useFlash;
