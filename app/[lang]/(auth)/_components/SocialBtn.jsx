import { doSocialLogin } from "@/app/actions";
import { Button } from "@/components/ui/button";

const SocialBtn = ({ btnName, value }) => {
  return (
    <form action={doSocialLogin}>
      <input type="hidden" name="provider" value={value} />
      <Button variant="themeOutline" className="rounded-none" type="submit">
        {btnName}
      </Button>
    </form>
  );
};

export default SocialBtn;
