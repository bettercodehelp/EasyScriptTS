/**
 *
 * @function `flip` - Quickly execute a heads or tails decision randomly
 * @returns {number} Returns 1 for heads or 0 for tails
 */

export function flip(): number {
	return Math.random() >= 0.5 ? 1 : 0;
}
