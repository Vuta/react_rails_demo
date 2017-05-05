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


css = Topic.create(name: "CSS")

css_questions = [
	{
		question: "What does CSS stand for?",
		options: [
			["Creative Style Sheets", false],
			["Colorful Style Sheets", false],
			["Cascading Style Sheets", true],
			["Computer Style Sheets", false]
		]
	},

	{
		question: "What is the correct HTML for referring to an external style sheet?",
		options: [
			["<style src='mystyle.css'>", false],
			["<link rel='stylesheet' type='text/css' href='mystyle.css'>", true],
			["<stylesheet>mystyle.css</stylesheet>", false]
		]
	},

	{
		question: "Where in an HTML document is the correct place to refer to an external style sheet?",
		options: [
			["At the end of the document", false],
			["In the <head> section", true],
			["In the <body> section", false]
		]
	},

	{
		question: "Which HTML tag is used to define an internal style sheet?",
		options: [
			["<script>", false],
			["<css>", false],
			["<style>", true]
		]
	},

	{
		question: "Which HTML attribute is used to define inline styles?",
		options: [
			["class", false],
			["style", true],
			["font", false],
			["styles", false]
		]
	},

	{
		question: "Which is the correct CSS syntax?",
		options: [
			["body {color: black;}", true],
			["{body;color:black;}", false],
			["body:color=black;", false],
			["{body:color=black;}", false]
		]
	},

	{
		question: "How do you insert a comment in a CSS file?",
		options: [
			["// this is a comment //", false],
			["/* this is a comment */", true],
			["// this is a comment", false],
			["' this is a comment", false]
		]
	},

	{
		question: "Which property is used to change the background color?",
		options: [
			["bgcolor", false],
			["color", false],
			["background-color", true]
		]
	},

	{
		question: "How do you add a background color for all <h1> elements?",
		options: [
			["h1 {background-color:#FFFFFF;}", true],
			["h1.all {background-color:#FFFFFF;}", false],
			["all.h1 {background-color:#FFFFFF;}", false]
		]
	},

	{
		question: "Which CSS property is used to change the text color of an element?",
		options: [
			["color", true],
			["text-color", false],
			["fgcolor", false]
		]
	}
]

css_questions.each do |content|
	question = css.questions.create(content: content[:question])
	content[:options].each do |option, is_right_choice|
		question.options.create(content: option, is_right_choice: is_right_choice)
	end
end

Topic.create(name: "Javascript")
