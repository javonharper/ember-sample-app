class Gift < ActiveRecord::Base
  attr_accessible :name
  belongs_to :letter
end
