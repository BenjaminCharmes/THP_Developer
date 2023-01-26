class Item < ApplicationRecord
  validates :name, length: { in: 5..50 }
  validates :price, numericality: { only_integer: true, greater_than: 0}
  validates :quantity, numericality: { only_integer: true, :greater_than_or_equal_to: 0}
  validates :brand, length: { in: 5..25 }
end
