class Advertisement < ApplicationRecord
 validates :title, presence: true
 validates :price, presence: true
 validates :description, presence: true
 validates :category, presence: true
 validates :room, presence: true
 validates :surface, presence: true
 validates :address, presence: true
 validates :city, presence: true
 validates :zip_code, presence: true
 validates :garden, presence: true
 validates :garage, presence: true
 validates :picture_url, presence: true

 belongs_to :user
end
