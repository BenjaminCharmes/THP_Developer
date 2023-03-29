// SCSS
import "./Tile.scss";

const Tile = ({ index, gridSize, tileNumber, image, tileSize, onClick }) => {
    const x = (index % gridSize) * tileSize;
    const y = Math.floor(index / gridSize) * tileSize;
  
    const adjustedTileNumber = (tileNumber + gridSize * gridSize - 1) % (gridSize * gridSize);
    const backgroundX = (-(adjustedTileNumber % gridSize) * tileSize) % (gridSize * tileSize);
    const backgroundY = (-Math.floor(adjustedTileNumber / gridSize) * tileSize) % (gridSize * tileSize);
  
    const tileStyle = {
      width: `${tileSize}px`,
      height: `${tileSize}px`,
      left: `${x}px`,
      top: `${y}px`,
      backgroundImage: tileNumber === 0 ? "none" : `url(${image})`,
      backgroundPosition: `${backgroundX}px ${backgroundY}px`,
      backgroundSize: `${gridSize * tileSize}px ${gridSize * tileSize}px`,
    };
  
    return (
      <div
        className={`tile ${tileNumber === 0 ? "tile-empty" : ""}`}
        onClick={onClick}
        style={tileStyle}
      ></div>
    );
  };

export default Tile;
