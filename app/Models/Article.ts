import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public ownerId: number

  // pour faire le lien, on utilise la clé ownerId de l'article et la clé id de l'utilisateur.
  // Ensuite, cela ajoutera une propriété owner à l'article du type User
  @belongsTo(() => User, { localKey: 'id', foreignKey: 'ownerId' })
  public owner: BelongsTo<typeof User>

  @column.dateTime({
    autoCreate: true,
  })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
