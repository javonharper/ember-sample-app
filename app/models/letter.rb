class Letter < ActiveRecord::Base
  attr_accessible :ask, :author, :pitch
  has_many :gifts
end
