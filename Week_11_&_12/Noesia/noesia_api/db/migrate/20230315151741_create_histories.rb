class CreateHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :histories do |t|
      t.belongs_to :user, index: true
      t.belongs_to :enigma, index: true
      t.integer :status, default: 2, null: false

      t.timestamps
    end
  end
end
