class Topic < ApplicationRecord

  has_many :enigmas
  has_many :users

end
