class Enigma < ApplicationRecord

  belongs_to :topic

  has_many :histories
  has_many :users, through: :histories
  
end
