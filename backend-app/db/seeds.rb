# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
html = Topic.create(name: "HTML")

html_questions = [
	{
		question: "What does HTML stand for?",
		options: [
			["Hyper Text Markup Language", true],
			["Home Tool Markup Language", false],
			["Hyperlinks and Text Markup Language", false]
		]
	},

	{
		question: "Who is making the web standards?",
		options: [
			["The World Wide Web Consortium", true],
			["Mozilla", false],
			["Google", false],
			["Microsoft", false]
		]
	},

	{
		question: "Choose the correct HTML element for the largest heading",
		options: [
			["<head>", false],
			["<h6>", false],
			["<heading>", false],
			["<h1>", true]
		]
	},

	{
		question: "What is the correct HTML element for inserting a line break?",
		options: [
			["<lb>", false],
			["<break>", false],
			["<br>", true]
		]
	},

	{
		question: "What is the correct HTML for adding a background color?",
		options: [
			["<body style='background-color:yellow;'>", true],
			["<body bg='yellow'>", false],
			["<background>yellow</background>", false]
		]
	},

	{
		question: "Choose the correct HTML element to define important text",
		options: [
			["<strong>", true],
			["<b>", false],
			["<important>", false],
			["<i>", false]
		]
	},

	{
		question: "Choose the correct HTML element to define emphasized text",
		options: [
			["<italic>", false],
			["<em>", true],
			["<i>", false]
		]
	},

	{
		question: "What is the correct HTML for creating a hyperlink?",
		options: [
			["<a href='http://www.w3schools.com'>W3Schools</a>", true],
			["<a url='http://www.w3schools.com'>W3Schools.com</a>", false],
			["<a>http://www.w3schools.com</a>", false],
			["<a name='http://www.w3schools.com'>W3Schools.com</a>", false]
		]
	},

	{
		question: "Which character is used to indicate an end tag?",
		options: [
			["*", false],
			["^", false],
			["/", true],
			["<", false]
		]
	},

	{
		question: "How can you open a link in a new tab/browser window?",
		options: [
			["<a href='url' new>", false],
			["<a href='url' target='new'>", false],
			["<a href='url' target='_blank'>", true]
		]
	}
]


html_questions.each do |content|
	question = html.questions.create(content: content[:question])
	content[:options].each do |option, is_right_choice|
		question.options.create(content: option, is_right_choice: is_right_choice)
	end
end


Topic.create(name: "CSS")
Topic.create(name: "Javascript")
