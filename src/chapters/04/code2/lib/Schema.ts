export namespace Storage {

	export namespace Schema {

		export namespace Attribute {
			
			export enum Type {
				BOOLEAN = 'boolean',
				NUMBER  = 'number',
				STRING  = 'string',
			}
	
			export type Descriptor = {
				name:     string,
				nullable: boolean,
				type:     Type, 
			}
	
		}

		export type Relations = Record<string, Attribute.Descriptor[]>

		export const addAttribute = (relations: Relations, name: string, descriptor: Attribute.Descriptor) : boolean => {
			if (name in relations) {
				if (relations[name].filter(x => x.name === descriptor.name).length === 0) {
					relations[name].push(descriptor)
					return true
				}
			}
				
			return false
		}

		export const addRelation = (relations: Relations, name: string) : boolean => {
			if (name.length && !(name in relations)) {
				relations[name] = []
				return true
			}

			return false
		}
	
		export const removeAttribute = (relations: Relations, relName: string, attrName: string) : boolean => {
			if (relName in relations) {
				const filteredAttributes = relations[relName].filter(item => item.name !== attrName)
				if (filteredAttributes.length !== relations[relName].length) {
					relations[relName] = filteredAttributes
					return true
				}
			}
			
			return false
		}

		export const removeRelation = (relations: Relations, name: string) : boolean => {
			if (name in relations) {
				delete relations[name]
				return true
			} 
			
			return false
		}

	}

}