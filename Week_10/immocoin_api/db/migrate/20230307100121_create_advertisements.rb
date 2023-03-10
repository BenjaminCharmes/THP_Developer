class CreateAdvertisements < ActiveRecord::Migration[7.0]
  def change
    create_table :advertisements do |t|
      t.string :title
      t.integer :price
      t.text :description
      t.string :category
      t.integer :room
      t.integer :surface
      t.string :address
      t.string :city
      t.string :zip_code
      t.integer :garden
      t.integer :garage
      t.string :picture_url
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
