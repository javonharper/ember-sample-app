class RemoveNameFromLetter < ActiveRecord::Migration
  def up
    remove_column :letters, :name
  end

  def down
    add_column :letters, :name, :string
  end
end
