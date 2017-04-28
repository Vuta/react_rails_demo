class Api::QuestionsController < ApplicationController
	def show
		question = Question.find(params[:id])
		render json: question, include: :options
	end
end
