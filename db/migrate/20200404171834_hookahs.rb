class Hookahs < ActiveRecord::Migration[6.0]
  def change

  	create_table :hookahs do |t|
		t.string :title
		t.text :description
		t.decimal :price
		t.text :package
		t.string :path_to_image
		t.boolean :is_best_offer

		t.timestamps
	end

  end
end
