import React, {useEffect, useState} from 'react';
import Type from "./Type";
import {DamageRelationsClass} from "../types/DamageRelationOfPokemonTypes";
import {Damage, DamageFromAndTo, SeparateDamages} from "../types/SeparateDamageRealations";

interface DamageModalProps {
    damages: DamageRelationsClass[];
}

interface Info {
    name: string;
    url: string;
}

const DamageRelations = ({damages}: DamageRelationsClass) => {

    const [damagePokemonForm, setDamagePokemonForm] = useState<SeparateDamages>();

    useEffect(() => {
        const arrayDamage = damages.map((damage) =>
            separateObjectBetweenToAndFrom(damage))

        if (arrayDamage.length === 2) {
            const obj = joinDamageRelations(arrayDamage);
            setDamagePokemonForm(reduceDuplicateValues(postDamageValue(obj.from)));
        } else {
            setDamagePokemonForm(postDamageValue(arrayDamage[0].from));
        }
    }, [damages]);

    const joinDamageRelations = (props: DamageFromAndTo[]): DamageFromAndTo => {
        return {
            to: joinObjects(props, 'to'),
            from: joinObjects(props, 'from')
        }
    }

    const reduceDuplicateValues = (props: SeparateDamages) => {

        const duplicateValues = {
            double_damage: '4x',
            half_damage: '1/4x',
            no_damage: '0x'
        }

        return Object.entries(props)
            .reduce((acc, [keyName, value]) => {
                const key = keyName as keyof typeof props;

                const verifiedValue = filterForUniqueValues(
                    value,
                    duplicateValues[key]
                )

                return (acc = {[keyName]: verifiedValue, ...acc});
            }, {})
    }

    const filterForUniqueValues = (valueForFiltering: Damage[], damageValue: string) => {

        const initialArray = [];

        return valueForFiltering.reduce((acc, currentValue) => {
            const {url, name} = currentValue;

            const filterACC = acc.filter((a) => a.name !== name);

            return filterACC.length === acc.length
                ? (acc = [currentValue, ...acc])
                : (acc = [{damageValue: damageValue, name, url}, ...filterACC])
        }, [])
    }

    const joinObjects = (props: DamageFromAndTo[], string: string) => {
        const key = string as keyof typeof props[0];
        const firstArrayValue = props[0][key];
        const secondArrayValue = props[1][key];

        const result = Object.entries(secondArrayValue)
            .reduce((acc, [keyName, value]: [string, Damage]) => {

                const key = keyName as keyof typeof firstArrayValue;

                const result = firstArrayValue[key]?.concat(value);

                return (acc = {[keyName]: result, ...acc})
            }, {})
        return result;
    }

    const postDamageValue = (props: SeparateDamages): SeparateDamages => {
        const result = Object.entries(props)
            .reduce((acc, [keyName, value]) => {

                const key = keyName as keyof typeof props;

                const valuesOfKeyName = {
                    double_damage: '2x',
                    half_damage: '1/2x',
                    no_damage: '0x'
                };

                return (acc = {
                    [keyName]: value.map((i: Info[]) => ({
                        damageValue: valuesOfKeyName[key], ...i
                    })),
                    ...acc
                })
            }, {})
        return result;
    }

    const separateObjectBetweenToAndFrom = (damage: DamageRelationsClass): DamageFromAndTo => {
        const from = filterDamageRelations('_from', damage);

        const to = filterDamageRelations('_to', damage);

        return {from, to};
    }

    const filterDamageRelations = (valueFilter: string, damage: DamageRelationsClass) => {
        const result: SeparateDamages = Object.entries(damage)
            .filter(([keyName, _]) => {
                return keyName.includes(valueFilter);
            })
            .reduce((acc, [keyName, value]): SeparateDamages => {

                const KeyWithValueFilterRemove = keyName.replace(valueFilter, '')

                return (acc = {[KeyWithValueFilterRemove]: value, ...acc})
            }, {})
        return result;
    }

    return (
        <div className='flex gap-2 flex-col'>
            {damagePokemonForm ? (
                <>
                    {Object.entries(damagePokemonForm)
                        .map(([keyName, value]: [string, Damage[]]) => {
                            const key = keyName as keyof typeof damagePokemonForm;
                            const valuesOfKeyName = {
                                double_damage: 'Week',
                                half_damage: 'Resistant',
                                no_damage: 'Immune'
                            }
                            return (
                                <div key={key}>
                                    <h3 className='capitalize font-medium text-sm md:text-base text-slate-500 text-center'>
                                        {valuesOfKeyName[key]}
                                    </h3>
                                    <div className='flex flex-wrap gap-1 justify-center'>
                                        {value.length > 0 ? (
                                            value.map(({name, url, damageValue}) => {
                                                return (
                                                    <Type
                                                        type={name}
                                                        key={url}
                                                        damageValue={damageValue}
                                                    />
                                                )
                                            })
                                        ) : (
                                            <Type type={'none'} key={'none'}/>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                </>
            ) : <div></div>
            }
        </div>
    );
};

export default DamageRelations;