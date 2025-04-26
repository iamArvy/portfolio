import type { AuthBaseProps } from "~/types";

export const useAuthBaseProps = () => {
  const props = useState<AuthBaseProps | undefined>(
    "auth-base-props",
    () => undefined
  );
  const setProps = (data: AuthBaseProps) => (props.value = data);

  return {
    props,
    setProps,
  };
};
