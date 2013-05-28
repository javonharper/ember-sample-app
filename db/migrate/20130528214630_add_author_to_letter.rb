class AddAuthorToLetter < ActiveRecord::Migration
  def change
    add_column :letters, :author, :string
  end
end
