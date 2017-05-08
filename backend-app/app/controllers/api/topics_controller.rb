class Api::TopicsController < ApplicationController
  def index
    topics = Topic.all
    render json: topics
  end

  def show
    topic = Topic.find(params[:id])
    questions = topic.questions
    render json: questions, include: [:options, :answer]
  end
end
