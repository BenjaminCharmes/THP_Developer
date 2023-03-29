class CreateEnigmas < ActiveRecord::Migration[7.0]
  def change
    create_table :enigmas do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :hint, null: false
      t.integer :world, null: false
      t.integer :level, null: false
      t.belongs_to :topic, index: true

      t.timestamps
    end
  end
end
