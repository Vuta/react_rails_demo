class Question < ApplicationRecord
  belongs_to :topic
  has_many :options
  has_one :answer
end
