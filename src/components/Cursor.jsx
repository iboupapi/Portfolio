import usePortfolioEffects from "../hooks/usePortfolioEffects";

export default function Cursor() {

  usePortfolioEffects();

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
    </>
  );
}