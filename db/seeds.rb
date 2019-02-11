# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Question.create([
  {sentence: "move to right", answer: "l"},
  {sentence: "move to left", answer: "h"},
  {sentence: "move to up", answer: "k"},
  {sentence: "move to down", answer: "j"},
])
