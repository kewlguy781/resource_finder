require "faker"

puts "Cleaning up users and resources"
Comment.destroy_all
Entry.destroy_all
User.destroy_all
Category.destroy_all


puts "Setting up Categories"
cat = Category.new
cat.cat_name = "Resturants"
cat.cat_desc = "Food and Drink"
cat.id = 0
cat.save!

cat = Category.new
cat.cat_name = "Lawyer"
cat.cat_desc = "Legal help"
cat.id = 1
cat.save!

cat = Category.new
cat.cat_name = "Interpreter"
cat.cat_desc = "Find Interpreters"
cat.id = 2
cat.save!

cat = Category.new
cat.cat_name = "Churches"
cat.cat_desc = "Religious Services"
cat.id = 3
cat.save!

cat = Category.new
cat.cat_name = "College"
cat.cat_desc = "Higher Education in Utah"
cat.id = 4
cat.save!

puts "Seeding Users"
5.times do |i|    
  user = User.new
  user.id = i
  user.email = "test#{i}@test.com"
  user.password = '123456'
  user.password_confirmation = '123456'
  user.name = Faker::Name.name
  user.image = Faker::Avatar.image(slug: "#{user.name}#{i}", size: "300x300", format: "png", set: "set1")
  user.save!
  puts user.email + " created"

 5.times do |j|
  e = Entry.new
  e.id = j + (i * 5)
  e.name = Faker::Company.name
  e.address = Faker::Address.street_address 
  e.city = Faker::Address.city
  e.state = Faker::Address.state
  e.email = Faker::Internet.email
  e.facebook = Faker::Internet.url
  e.wed = Faker::Internet.url
  e.desc = Faker::Company.catch_phrase
  e.icon = Faker::Company.logo
  e.img = Faker::Company.logo
  e.category_id = rand(Category.count)
  e.user_id = rand(User.count)
  e.save!
 end
end

puts "Seeding Comments randomly into Entries"
50.times do |k|
  max = 10
  c = Comment.new
  c.rating = rand(max)
  c.comment = Faker::Quote.robin
  c.entry_id = rand(Entry.count)
  c.user_id = rand(User.count)
  c.save!
end
