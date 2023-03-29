class History < ApplicationRecord

  belongs_to :user
  belongs_to :enigma

  enum :status, [ :failed, :success, :ongoing ]

end
