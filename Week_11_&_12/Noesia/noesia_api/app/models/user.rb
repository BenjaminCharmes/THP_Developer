class User < ApplicationRecord
  # after_create :welcome_send

  validates :username, presence: true, uniqueness: true
  validates :karma, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable,
	       jwt_revocation_strategy: JwtDenylist

  has_many :histories
  has_many :enigmas, through: :histories

  has_many :join_table_user_achievements
  has_many :achievements, through: :join_table_user_achievements

  def welcome_send
    UserMailer.welcome_email(self).deliver_now
  end
  
end
