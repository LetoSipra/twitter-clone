import { Provider } from "next-auth/providers";
import { signIn } from "next-auth/react";

interface Props {
  providers: Provider;
}

function Login({ providers }: Props) {
  return (
    <>
      <div className="flex flex-col items-center space-y-20 pt-48 text-white">
        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                Click to login
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Login;
