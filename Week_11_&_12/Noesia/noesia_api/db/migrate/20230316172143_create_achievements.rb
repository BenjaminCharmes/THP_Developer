class CreateAchievements < ActiveRecord::Migration[7.0]
  def change
    create_table :achievements do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :points, default: 1, null: false
      t.boolean :is_hidden, default: false

      t.timestamps
    end
  end
end
