class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const calculateQualityDifferenceNormalItem = ({ sellIn, quality }) => {
  const isQualityBiggerThan0 = quality > 0;
  const areNoMoreDaysToSell = sellIn < 0;

  if (isQualityBiggerThan0 && areNoMoreDaysToSell) return -2;
  if (isQualityBiggerThan0) return -1;

  return 0;
};

const calculateQualityDifferenceBackstagePasses = ({ sellIn, quality }) => {
  const tenDaysOrLessToSell = sellIn <= 10;
  const fiveDaysOrLessToSell = sellIn <= 5;
  const areNoMoreDaysToSell = sellIn < 0;

  if (areNoMoreDaysToSell) return -quality;
  if (fiveDaysOrLessToSell) return +3;
  if (tenDaysOrLessToSell) return +2;

  return +1;
};

const calculateSellinDifference = ({ sellIn, name }) => {
  const isSulfuras = name == "Sulfuras, Hand of Ragnaros";
  return !isSulfuras ? -1 : 0;
};

const calculateQualityDifference = item => {
  const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros";
  const isAgedBrie = item.name == "Aged Brie";
  const isConjuredItem = item.name.includes("Conjured");
  const isBackstagePasses = item.name == "Backstage passes to a TAFKAL80ETC concert";
  const isQualityLessThan50 = item.quality < 50;
  const isNormalItem = !isAgedBrie && !isBackstagePasses && !isSulfuras && !isConjuredItem;

  if (isNormalItem) return calculateQualityDifferenceNormalItem(item);
  if (isBackstagePasses) return calculateQualityDifferenceBackstagePasses(item);
  if (isAgedBrie && isQualityLessThan50) return +1;
  if (isConjuredItem) return calculateQualityDifferenceNormalItem(item) * 2;

  return 0;
};

const isQualityBiggerThan50 = item => {
  const isQualityBiggerThan50 = item.quality > 50;
  const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros";

  if (isQualityBiggerThan50 && !isSulfuras) item.quality = 50;
  return item.quality
}


class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    const isAgedBrie = this.items.some(item => item.name == "Aged Brie");
    const isBackstagePassesSellInZero = this.items.some(item => item.name == "Backstage passes to a TAFKAL80ETC concert" && item.sellIn === 0) || false;

    if (isAgedBrie && isBackstagePassesSellInZero) { this.items.map(item => item.name == "Aged Brie" ? item.quality = -1 : item.quality = item.quality); }

    return this.items.map(item => {
      item.sellIn += calculateSellinDifference(item);
      item.quality += calculateQualityDifference(item);
      item.quality = isQualityBiggerThan50(item)
      return item;
    });

  }
}

module.exports = {
  Item,
  Shop
}
