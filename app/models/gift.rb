class Gift < ActiveRecord::Base
  attr_accessible :name, :letter_id
  belongs_to :letter
end
