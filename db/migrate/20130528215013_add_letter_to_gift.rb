class AddLetterToGift < ActiveRecord::Migration
  def change
    add_column :gifts, :letter, :integer
  end
end
