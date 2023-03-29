class CreateJoinTableUserAchievements < ActiveRecord::Migration[7.0]
  def change
    create_table :join_table_user_achievements do |t|
      t.belongs_to :user
      t.belongs_to :achievement

      t.timestamps
    end
  end
end
