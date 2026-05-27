import React from "react";
import HerosList from "../components/Heros/HerosList";
import Scrollpositin from "../components/ScrollPosition/Scrollpositin";

const HerosPage = () => {
  return (
    <section>
      <h1>HerosPage</h1>

      <Scrollpositin
        render={({ scrollY }) => (
          <>
            <HerosList />
            {scrollY > 100 && (
              <button onClick={()=>window.scrollTo({top:0})} style={{ position: "fixed", bottom: 0, right: 0 }}>
                UP
              </button>
            )}
          </>
        )}
      />
    </section>
  );
};

export default HerosPage;
