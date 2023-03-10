# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do |i|
  User.create!(username: "user#{i}", email: "user#{i}@example.com", password: "123456")
end

25.times do |i|
  Advertisement.create!(title: Faker::Lorem.sentence(word_count: 3), price: rand(100000..500000), description: Faker::Lorem.sentence(word_count:25), category: Faker::Lorem.sentence(word_count: 1), room: rand(1..5), surface: rand(20..200), address: Faker::Address.street_address, city: Faker::Address.city, zip_code: Faker::Address.zip_code, garden: true, garage: true, picture_url: "advert#{i+1}.jpg", user_id: User.all.sample.id)
end
