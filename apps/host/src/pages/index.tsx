import { Button } from '@nx-mfed-mfe/ui';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome host 👋
            </h1>
          </div>
          <Button>Hola</Button>
        </div>
      </div>
    </div>
  );
}

export default Index;
