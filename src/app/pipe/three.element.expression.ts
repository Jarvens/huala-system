import {Pipe, PipeTransform} from '@angular/core';
/**
 *
 * 自定义三元表达式 管道运算
 *
 **/
@Pipe({name: 'threeElementExpression'})
export class ThreeElementExpression implements PipeTransform {
	transform (value: string, expectValue: string): string {
		let params: array<string> = expectValue.split(";");
		let result = value == true ? params[0] : params[1];
		return result;
	}
}