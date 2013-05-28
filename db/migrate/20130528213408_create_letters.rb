class CreateLetters < ActiveRecord::Migration
  def change
    create_table :letters do |t|
      t.text :pitch
      t.string :ask
      t.string :name

      t.timestamps
    end
  end
end
