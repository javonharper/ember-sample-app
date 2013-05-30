class RenameLetterToIdGift < ActiveRecord::Migration
  def change
    rename_column :gifts, :letter, :letter_id
  end
end
