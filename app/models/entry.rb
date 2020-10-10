class Entry < ApplicationRecord
  belongs_to :category
  belongs_to :user
  has_many :comments

  #For Search 
  scope :filter_by_name, -> (name) { where("name ilike ?", "%" + name + "%")}
end
