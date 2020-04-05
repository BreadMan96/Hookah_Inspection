class AddHookahs < ActiveRecord::Migration[6.0]
  def change
  	Hookah.create :title => 'Кальян - Khalil Mamoon', :description => 'Сделан качественно. Тянется легко и непринужденно.', :price => 800, :package => 'Полный комплект кальяна (без табака и углей)!', :path_to_image => '/images/khalil.PNG', :is_best_offer => 'false'
  	Hookah.create :title => 'Кальян - Sherif Fawzy', :description => 'Этот кальян не нуждается в представлении.', :price => 1500, :package => 'Полный комплект кальяна (без табака и углей)!', :path_to_image => '/images/sheriff.PNG', :is_best_offer => 'true'
  	Hookah.create :title => 'Кальян - Amy Delux', :description => 'Бюджетный вариант, для весёлых посиделок!', :price => 500, :package => 'Полный комплект кальяна (без табака и углей)!', :path_to_image => '/images/amy.PNG', :is_best_offer => 'false'
  end
end
