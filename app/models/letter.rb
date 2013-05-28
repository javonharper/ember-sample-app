class Letter < ActiveRecord::Base
  attr_accessible :ask, :name, :pitch

  has_many :gifts
end
