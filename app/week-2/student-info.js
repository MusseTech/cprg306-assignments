import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <p>Name: Amal Musse</p>
            <p>
                GitHub:{" "}
                <Link href="https://github.com/MusseTech/cprg306-assignments">
                    https://github.com/MusseTech/cprg306-assignments
                </Link>
            </p>
        </div>
    );
}




