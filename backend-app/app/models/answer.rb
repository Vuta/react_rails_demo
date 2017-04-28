class Answer < ApplicationRecord
	belongs_to :question
	has_many :options
end
