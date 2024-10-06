import { client } from '@ccreusat/client';

export function MyLib() {
  console.log({ client });
  return (
    <div>
      <h1>Welcome to MyLib!</h1>
    </div>
  );
}

export default MyLib;
