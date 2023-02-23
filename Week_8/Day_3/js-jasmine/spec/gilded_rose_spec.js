const {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("full test", () => {
    console.log("")
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 39),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6),
    ];

    const expectedItemsAfterTwoDays = [
      new Item("+5 Dexterity Vest", 8, 18),
      new Item("Aged Brie", 0, 2),
      new Item("Elixir of the Mongoose", 3, 5),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 13, 22),
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 45),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 1, 2),
    ];

    const gildedRoseAfterTwoDays = new Shop(expectedItemsAfterTwoDays);

    const days = Number(process.argv[2]) || 2;;
    const gildedRose = new Shop(items);

    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
      gildedRose.updateQuality();
    }

    expect(gildedRoseAfterTwoDays.items).toEqual(gildedRose.items);
    expect(gildedRoseAfterTwoDays.sellIn).toEqual(gildedRose.sellIn);
  });

  it("should foo", function() {
    console.log("")
    console.log("Should foo ?")
    console.log("")

    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("Should return correct result", () => {
    console.log("")
    console.log("Should return correct result")
    console.log("")

    const storeItems = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)
    ];

    const expectedResult = [
      new Item("+5 Dexterity Vest", 9, 19),
      new Item("Aged Brie", 1, 1),
      new Item("Elixir of the Mongoose", 4, 6),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21)
    ];
    
    const gildedRose = new Shop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toEqual(expectedResult);
  });

  // 1️⃣
  it("The quality of BackstagePasses increases by 3 when there are 5 days or less remaining", function() {
    
    console.log("")
    console.log("The quality of BackstagePasses increases by 3 when there are 5 days or less remaining")
    console.log("")

    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 10),
    ];

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(23);
    expect(gildedRose.items[1].quality).toBe(13);
  })

  // 2️⃣
  it("Sulfuras' quality does not change", function() {
    
    console.log("")
    console.log("Sulfuras' quality does not change")
    console.log("")

    const items = [
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    ];

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(80);
    expect(gildedRose.items[1].quality).toBe(80);
  })

  // 3️⃣
  it("The quality degrades twice as fast after the expiration date", function() {
    
    console.log("")
    console.log("The quality degrades twice as fast after the expiration date")
    console.log("")

    const items = [
      new Item("+5 Dexterity Vest", 0, 20),
      new Item("Elixir of the Mongoose", 0, 7),
    ];

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(18);
    expect(gildedRose.items[1].quality).toBe(5);
  })

  // 4️⃣
  it("The quality of a product can never be negative", function() {
    
    console.log("")
    console.log("The quality of a product can never be negative")
    console.log("")

    const items = [
      new Item("+5 Dexterity Vest", 5, 0),
      new Item("Elixir of the Mongoose", 10, 0),
    ];

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(0);
    expect(gildedRose.items[1].quality).toBe(0);
  })

  // 5️⃣
  it("Aged Brie increases in quality as time passes", function() {
    
    console.log("")
    console.log("Aged Brie increases in quality as time passes")
    console.log("")

    const items = [
      new Item("Aged Brie", 5, 0),
      new Item("Aged Brie", 2, 10),
    ];

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(1);
    expect(gildedRose.items[1].quality).toBe(11);
  })

  // 6️⃣
  it("The quality of a product is never more than 50", function() {
    
    console.log("")
    console.log("The quality of a product is never more than 50")
    console.log("")

    const items = [
      new Item("Aged Brie", 5, 50),
      new Item("Aged Brie", 2, 49),
    ];

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).not.toBe(52);
    expect(gildedRose.items[1].quality).not.toBe(51);
  })

  // 7️⃣
  it("Sulfuras has no expiration date", function() {
    
    console.log("")
    console.log("Sulfuras has no expiration date")
    console.log("")

    const items = [
      new Item("Sulfuras, Hand of Ragnaros", -10, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    ];

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].sellIn).toBe(-10);
    expect(gildedRose.items[1].sellIn).toBe(-1);
  })

  // 8️⃣
  it("The quality of BackstagePasses increases by 2 when there are 10 days or less remaining", function() {
    
    console.log("")
    console.log("The quality of BackstagePasses increases by 2 when there are 10 days or less remaining")
    console.log("")

    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 10),
    ];

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(22);
    expect(gildedRose.items[1].quality).toBe(12);
  })

  // 9️⃣
  it("The quality drops to 0 after the concert", function() {
    
    console.log("")
    console.log("The quality drops to 0 after the concert")
    console.log("")

    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ];

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(0);
    expect(gildedRose.items[1].quality).toBe(0);
  })

    // 9️⃣
  it("The quality of Brie drops to 0 after the concert", function() {
    
    console.log("")
    console.log("The quality drops to 0 after the concert")
    console.log("")

    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20),
      new Item("Aged Brie", -10, 30),
    ];

    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(0);
    expect(gildedRose.items[1].quality).toBe(0);
  })

  // 1️⃣0️⃣
  it("The quality of conjured items should decrease twice as fast", function() {

    console.log("")
    console.log("The quality of conjured items should decrease twice as fast")
    console.log("")

    const storeItems = [new Item("Conjured Mana Cake", 10, 20)];
    const expectedResult = [new Item("Conjured Mana Cake", 9, 18)];
    const gildedRose = new Shop(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toEqual(expectedResult);
  });

    // 1️⃣0️⃣
    it("When SellIn below zero quality decrease faster", function() {

      console.log("")
      console.log("When SellIn below zero quality decrease faster")
      console.log("")
  
      const items = [
        new Item("+5 Dexterity Vest", -5, 20),
        new Item("Elixir of the Mongoose", -10, 7),
      ];
  
      const gildedRose = new Shop(items);
  
      gildedRose.updateQuality();
  
      expect(gildedRose.items[0].quality).toBe(18);
      expect(gildedRose.items[1].quality).toBe(5);
    });
});

