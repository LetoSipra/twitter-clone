import { signIn } from "next-auth/react";

function Login({ providers }: any) {
  return (
    <>
      <div className="flex flex-col items-center space-y-20 pt-48 text-white">
        <div>
          {Object.values(providers).map((provider): any => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                3133333333333333
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Login;
